const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return postMessage;
            break;
        case 'CREATE': 
            return posts;
            break;
        default:
            return posts;
    }
}