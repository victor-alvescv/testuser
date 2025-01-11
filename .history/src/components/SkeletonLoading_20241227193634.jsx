import { Skeleton } from '@chakra-ui/react';
import React from 'react';
import styles from "../Directory.module.css"

const SkeletonLoading = () => {
    const skeletons = Array(10)

    return (
        <>
            <Skeleton 
            className={styles.skeleton} 
            width="310px" 
            height="460px"/>
        </>
    );
}

export default SkeletonLoading;
