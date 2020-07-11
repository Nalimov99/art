const postData = async function(url, data) {
        
    let res = await fetch(url, {
        method: "POST",
        body: data
    });

    return await res.text();
};

const getRequest = async function(url) {
        
    let res = await fetch(url);

    if(!res.ok) {
        throw new Error(`Could not Fetch ${url}, status: ${res.status} `);
    }

    return await res.json();
};

export {postData, getRequest};
