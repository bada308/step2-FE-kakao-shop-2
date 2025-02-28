import { keyframes, styled } from 'styled-components';

/**
 * 스켈레톤 UI를 위한 스타일드 컴포넌트
 */

const skeleton_gradient = keyframes`
    0% {
        background-color: rgba(165, 165, 165, 0.1);
    }
    50% {
        background-color: rgba(165, 165, 165, 0.3);
    }
    100% {
        background-color: rgba(165, 165, 165, 0.1);
    }
`;

const SkeletonItem = styled.div`
    width: 100%;
    height: 30px;
    background-color: #f2f2f2;
    position: relative;
    overflow: hidden;
    border-radius: 4px;

    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        animation: ${skeleton_gradient} 1.5s infinite ease-in-out;
    }
`;

export default SkeletonItem;
