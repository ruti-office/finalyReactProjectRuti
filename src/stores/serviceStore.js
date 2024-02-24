import { observable, action, makeObservable } from "mobx";
import axios from "axios";


class ServiceStore {

    serviceList = [{ "id": 0, "name": "חשבון", "description": "ללמוד חשבון בכיף", "price": 120, "duration": 45, },
    { "id": 1, "name": "english", "description": "ללמוד אנגלית בכיף", "price": 140, "duration": 45 },
    { "id": 2, "name": "לשון", "description": "ללמוד לשון בכיף", "price": 90, "duration": 45 }];
    constructor() {
        makeObservable(this, {
            serviceList: observable,
            addService: action,
            getServices: action
        })
    }
    getServices = () => {
        axios.get("http://localhost:8787/services")
            .then(res => {
                if (res.status === 200 && this.serviceList.length === 3) {
                    this.serviceList = [...this.serviceList, ...res.data];
                }
            })
            .catch(err => {
                console.log(err)
            })
    }


    addService = (service) => {
        axios.post("http://localhost:8787/service", service)
            .then(res => {
                console.log(res.data)
                if (res.status === 200) {
                    this.serviceList = [...this.serviceList, service]
                    alert('השירות נוסף בהצלחה')
                }
            })
            .catch(err => {
                alert('שגיאה בהתחברות')
            })
    }
}

export default new ServiceStore