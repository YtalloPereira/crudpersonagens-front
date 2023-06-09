import ApiService from "./ApiService";

export default class HabilidadeApiService extends ApiService{

    constructor(){
        super('/habilidade');
    }

    create (object){
        return this.post('',object);
    }

    update(id, object){
        return this.put(`/${id}`, object);
    }

    delete(id){
        return super.delete(`/${id}`);
    }

    getAll(){
        return super.get();
    }
}