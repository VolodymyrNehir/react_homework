import {urls} from "../Configs/urls";
import {axiosServices} from "./axiosServices";

export const albumsServices = {
    allAlbums: (id) =>
        axiosServices.get('/users/' + `${id}` + urls.albums).then(value => value.data)

}
