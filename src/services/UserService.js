import UrlBase from "../shared/UrlBase";
import { User } from '../entites/User'

class UserService {
    fetchUsers() {
        const userEndpoint = `${UrlBase}?results=15`;
        return fetch(userEndpoint)
            .then(response => {
                return response.json();
            }).then(response => {
                const { results } = response;
                console.log(response)
                return results.map(({ name, picture, dob, email, gender }) => {
                    return new User(name, picture.medium, dob.date, email, gender);
                });
            })
    }
}

const userService = new UserService();

export { userService };