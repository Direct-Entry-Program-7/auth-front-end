export function getUsername(){
    const token = localStorage.getItem('token');

    if (!token) throw new Error('Failed to fetch the username');

    return (token as any).username;
}

export function getFullName(){
    const token = localStorage.getItem('token');

    if (!token) throw new Error('Failed to fetch the full name');

    return (token as any).fullName;
}

export function signOut(){
    localStorage.removeItem('token');
    window.location.replace('http://localhost:1234/sign-in.html');
}