import {axiosService} from "./axios.service";
import {urls} from "../config/urls";

const postService={
    getPosts:()=>axiosService.get(urls.posts)
}

export {
    postService
}