import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "http://localhost:9092"
})


export class RoomService{
    listarTodos(){
        return axiosInstance.get("/api/rooms")
    }
}