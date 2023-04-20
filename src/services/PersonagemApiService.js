import ApiService from "./ApiService";

export default class EntitiesApiService extends ApiService{

    constructor(){
        super('/personagem');
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