import axios, { AxiosResponse } from 'axios';
import { Activity } from '../models/activity';

const sleep = (delay: number) => {
    return new Promise((resolve) => {
        setTimeout(resolve, delay);
    });
};

axios.defaults.baseURL = 'http://localhost:5000/api/';

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

axios.interceptors.response.use(async (response) => {
    try {
        // await sleep(300);
        return response;
    } catch (error) {
        console.log(error);
        return await Promise.reject(error);
    }

    // const { data, status, config } = error.response as AxiosResponse;
    // switch (status) {
    //     case 400:
    //         if (config.method === 'get' && data.errors.hasOwnProperty('id')) {
    //             router.navigate('/not-found');
    //         }
    //         if (data.errors) {
    //             const modalStateErrors = [];
    //             for (const key in data.errors) {
    //                 if (data.errors[key]) {
    //                     modalStateErrors.push(data.errors[key])
    //                 }
    //             }
    //             throw modalStateErrors.flat();
    //         } else {
    //             toast.error(data);
    //         }
    //         break;
    //     case 401:
    //         toast.error('unauthorised')
    //         break;
    //     case 403:
    //         toast.error('forbidden')
    //         break;
    //     case 404:
    //         router.navigate('/not-found');
    //         break;
    //     case 500:
    //         store.commonStore.setServerError(data);
    //         router.navigate('/server-error');
    //         break;
    // }
});

const requests = {
    get: <T>(url: string) => axios.get<T>(url).then(responseBody),
    post: <T>(url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
    put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
    del: <T>(url: string) => axios.delete<T>(url).then(responseBody),
};

const Activities = {
    list: () => requests.get<Activity[]>('/activities'),
    details: (id: string) => requests.get<Activity>(`/activities/${id}`),
    create: (activity: Activity) => requests.post<void>(`/activities`, activity),
    update: (activity: Activity) => requests.put<void>(`/activities/${activity.id}`, activity),
    delete: (id: string) => requests.del<void>(`/activities/${id}`),

    // list: (params: URLSearchParams) => axios.get<PaginatedResult<Activity[]>>('/activities', { params })
    //     .then(responseBody),
    // details: (id: string) => requests.get<Activity>(`/activities/${id}`),
    // create: (activity: ActivityFormValues) => requests.post<void>(`/activities`, activity),
    // update: (activity: ActivityFormValues) => requests.put<void>(`/activities/${activity.id}`, activity),
    // delete: (id: string) => requests.del<void>(`/activities/${id}`),
    // attend: (id: string) => requests.post<void>(`/activities/${id}/attend`, {})
};

const agent = {
    Activities,
};

export default agent;
