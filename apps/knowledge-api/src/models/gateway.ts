export interface LLMGenerateInput {
  query: string;
  context: string;
  stream?: boolean;
}

export interface LLMProvider {
  generate(input: LLMGenerateInput): Promise<string>;
}

export class ModelGateway {
  private provider: LLMProvider;

  constructor(provider: LLMProvider) {
    this.provider = provider;
  }

  async generate(input: LLMGenerateInput): Promise<string> {
    return this.provider.generate(input);
  }
}
