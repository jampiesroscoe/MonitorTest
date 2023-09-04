import {Model, model, property} from '@loopback/repository';

@model()
export class TestRequest extends Model {
  @property({
    type: 'string',
    required: true,
  })
  transactionId: string;

  @property({
    type: 'string',
    required: true,
  })
  sourceId: string;

  @property({
    type: 'string',
    required: true,
  })
  text: string;

  @property({
    type: 'number',
    required: true,
  })
  num: number;

  @property({
    type: 'boolean',
  })
  bool?: boolean;

  @property({
    type: 'object',
  })
  obj?: object;

  @property({
    type: 'array',
    itemType: 'any',
  })
  arr?: any[];


  constructor(data?: Partial<TestRequest>) {
    super(data);
  }
}


