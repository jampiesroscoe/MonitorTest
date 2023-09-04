import {inject} from '@loopback/core';
import {
  Request,
  RestBindings,
  get,
  response,
  post,
  requestBody,
} from '@loopback/rest';
import { TestRequest } from '../models';

/**
 * OpenAPI response for ping()
 */
const PING_RESPONSE: any = {
  description: 'Ping Response',
  content: {
    'application/json': {
      schema: {
        type: 'object',
        title: 'PingResponse',
        properties: {
          greeting: {type: 'string'},
          date: {type: 'string'},
          url: {type: 'string'},
          headers: {
            type: 'object',
            properties: {
              'Content-Type': {type: 'string'},
            },
            additionalProperties: true,
          },
        },
      },
    },
  },
};




/**
 * A simple controller to bounce back http requests
 */
export class PingController {
  constructor(@inject(RestBindings.Http.REQUEST) private req: Request) {}

  // Map to `GET /ping`
  @get('/ping')
  @response(200, PING_RESPONSE)
  async ping(): Promise <any> {
    // Reply with a greeting, the current time, the url, and request headers
    return {
      greeting: 'Hello from LoopBack',
      date: new Date(),
      url: this.req.url,
      headers: Object.assign({}, this.req.headers),
    };
  }

  @post('/postTest')
  @response(200, TestRequest)
  async postTest(
    @requestBody({description: 'A test object', required: true})
    request:  TestRequest,
    ): Promise <any> {
    return {
      greeting: 'Hello from LoopBack',
      date: new Date(),
      url: this.req.url,
      response: request,
      headers: Object.assign({}, this.req.headers),
    };
  } 
}
