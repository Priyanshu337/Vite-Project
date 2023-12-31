import axios from 'axios';

export class UsersService {
    private static URL: String = 'https://jsonplaceholder.typicode.com'

    public static getAllUsers() {
        let UserURL: string = `${this.URL}/users`
        return axios.get(UserURL);
    }
}

export class PostService {
    private static URL: string = `https://jsonplaceholder.typicode.com`

    public static getAllPosts() {
        let PostUrl: string = `${this.URL}/posts`
        return axios.get(PostUrl);
    }
}

