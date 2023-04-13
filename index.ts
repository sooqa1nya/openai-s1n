import axios from 'axios';

import { createURL } from './config';
import { IMessage, IDataCompletion, IResultOpenAI } from './types';

export class OpenAI {

    private _api_key: string;

    constructor(api_key: string) {
        this._api_key = api_key;
    }

    public async _createChatCompletion(message: string | Array<IMessage>): Promise<IResultOpenAI> {

        const url: string = await createURL();

        let data: IDataCompletion = {
            'model': 'gpt-3.5-turbo',
            'temperature': 0.7
        };

        if (typeof message === 'string') {

            data.messages = [{
                'role': 'user',
                'content': message
            }];

        } else {

            data.messages = message;

        }


        try {

            const response = await axios({
                method: 'POST',
                url,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer + ${this._api_key}`
                },
                data: JSON.stringify(data),
            });

            return { status: true, content: response.data.choices[0].content };

        } catch (e: any) {

            return { status: false, error: e.response.data };

        }

    }

}