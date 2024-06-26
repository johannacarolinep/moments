import jwtDecode from "jwt-decode";
import { axiosReq } from "../api/axiosDefaults";

export const fetchMoreData = async (resource, setResource) => {
    try {
        const { data } = await axiosReq.get(resource.next)
        setResource(prevResource => ({
            ...prevResource,
            next:data.next,
            results: data.results.reduce((acc, cur) => {
                return acc.some(accResult => accResult.id === cur.id)
                ? acc
                : [...acc, cur];
            }, prevResource.results)
        }))
    } catch(err) {
        // console.log(err);
    }
}

export const followHelper = (profile, clickedProfile, following_id) => {
    return profile.id === clickedProfile.id
    ? // This is the profile that was clicked - update its followers and set its following id
    {
        ...profile,
        followers_count: profile.followers_count + 1,
        following_id
    }
    : profile.is_owner 
    ? // The profile of the logged in user, update following count
    {
        ...profile,
        following_count: profile.following_count + 1
    }
    : // not the clicked profile, nor the logged in user's profile
    profile;
}

export const unfollowHelper = (profile, clickedProfile) => {
    return profile.id === clickedProfile.id
    ? // This is the profile that was clicked - update its followers
    {
        ...profile,
        followers_count: profile.followers_count - 1,
        following_id: null,
    }
    : profile.is_owner 
    ? // The profile of the logged in user, update following count
    {
        ...profile,
        following_count: profile.following_count - 1
    }
    : // not the clicked profile, nor the logged in user's profile
    profile;
};

export const setTokenTimestamp = (data) => {
    const refrshTokenTimestamp = jwtDecode(data?.refresh_token).exp
    localStorage.setItem("refreshToken-timestamp", refrshTokenTimestamp)
}

export const shouldRefreshToken = () => {
    return !!localStorage.getItem('refreshTokenTimestamp')
}

export const removeTokenTimestamp = () => {
    localStorage.removeItem('refreshTokenTimestamp')
}