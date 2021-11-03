import { of } from "rxjs";

export class UserMockService {
    getListUser(user: string,
        sort: string,
        per_page: number,
        page: number,
        order: string)
    {
        of(
            {
                total: 1,
                items: [
                {
                    login: "foo",
                    profile: "https://avatars.githubusercontent.com/u/33384?v=4",
                    type: "User"
                }
                ]
            }
        )
    }
}