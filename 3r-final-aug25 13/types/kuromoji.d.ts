declare module "kuromoji" {
  type Token = {
    surface_form: string;
    reading?: string;
  };

  type Tokenizer = {
    tokenize(text: string): Token[];
  };

  type Builder = {
    build(callback: (error: Error | null, tokenizer: Tokenizer) => void): void;
  };

  const kuromoji: {
    builder(options: { dicPath: string }): Builder;
  };

  export default kuromoji;
}
