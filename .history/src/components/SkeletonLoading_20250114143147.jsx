import { Skeleton } from '@chakra-ui/react';
import React from 'react';

const SkeletonLoading = () => {
    const skeletons = Array(10).fill(null);

    return (
        <>
        {skeletons.map((_, index) => (
            <Skeleton
            key={index} 
            className='.skeleton' 
            width="230px" 
            height="380px"/>
        ))
        }
        </>
    );
}

export default SkeletonLoading;
