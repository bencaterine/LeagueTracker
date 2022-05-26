import {useState, useEffect} from 'react';
import {db} from './firebase';
import {collection, getDocs, limit, query, orderBy} from 'firebase/firestore';

export function useFetchGames() {
    console.log('fetched');

    const [data, setData] = useState ([]);
    
    useEffect(() => {
        getDocs(
            query(
                collection(db, 'games')
            )
        ).then(snapshot => {
            setData(
                snapshot.docs.map(doc => ({
                    ...doc.data(),
                    id: doc.id
                }))
            )
        })
    }, []);
    
    return {
        data
    };
}