import "reflect-metadata";


// interface群
interface User {
    id: number,
    name: string,
}

interface UserApiInterface {
    fetchUser: (id: number) => {}
}