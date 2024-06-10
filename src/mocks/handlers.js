import {
    rest
} from "msw";

const baseURL = "https://drf-moments-ci-acc06eb4f190.herokuapp.com/";

export const handlers = [
    rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
        return res(ctx.json({
            pk: 3,
            username: "super",
            email: "",
            first_name: "",
            last_name: "",
            profile_id: 3,
            profile_image: "https://res.cloudinary.com/deceun0wd/image/upload/v1/media/images/IMG_0833-2_bdfqec"
        }));
    }),
    rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
        return res(ctx.status(200));
    }),
];