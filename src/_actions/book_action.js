import axios from "axios";
import { parseString } from 'xml2js'
import {
    SEARCH_BOOK
} from './types';

export async function searchBook(query) {
    // Naver API
    const URL = '/v1/search/book.xml'
    const SEARCH_KEY = {
        'X-Naver-Client-Id': process.env.REACT_APP_NAVER_ID,
        'X-Naver-Client-Secret': process.env.REACT_APP_NAVER_SECRET,
    }

    const response = await axios.get(URL, {
        params: { query: query, display: 5 },
        headers: SEARCH_KEY
    }).catch(error => {
        console.log(error)
        return { message: "API Error", success: false }
    })

    
    // handle success
    var payload = "";
    parseString(response.data,
        function (err, result) {
            console.log(result.rss.channel[0].item)
            if (result.rss.channel[0].total == 0) {
                payload = { message: "No results.", success: false }
            }
            else {
                //setBooks(result.rss.channel[0].item)
                payload = { books: result.rss.channel[0].item, success: true }
            }
        }
    );
    console.log(response)

    return {
        type: SEARCH_BOOK,
        payload: payload,
    }
}
