import api from "./api";
import { UpdateToken, RemoveToken } from "./token.service";

class AuthService {
    login = async (credentials) => {
        return api
            .post('/auth/login', credentials)
            .then(res => {
                const data = res.data;
                if (data.accessToken) {
                    UpdateToken(data.accessToken, data.user);
                    return data;
                }
                return false;
            });
    }

    logout = async () => {
        return api
            .delete('/auth/logout')
            .then((res) => {
                RemoveToken();
                return res.data;
            });
    }

    register = async (credentials) => {
        return api
            .post('/auth/register', credentials)
            .then((res) => {
                return res.data;
            });
    }
}
export default new AuthService();