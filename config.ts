const OPENAI_LINK: string = 'https://api.openai.com';
const OPENAI_VERSION: string = 'v1';
const DEFAULT_MODEL: string = 'gpt-3.5-turbo';

export const createURL = async (): Promise<string> => {
    return `${OPENAI_LINK}/${OPENAI_VERSION}/chat/completions`;
};