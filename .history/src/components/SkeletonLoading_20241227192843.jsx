import { Skeleton } from '@chakra-ui/react';
import React from 'react';

const SkeletonLoading = () => {
    return (
        <div className={styles}>
            <Skeleton width="310px" height="460px"/>
        </div>
    );
}

export default SkeletonLoading;
