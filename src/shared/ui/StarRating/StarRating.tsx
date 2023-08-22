import { memo, useState } from 'react';
import cls from './StarRating.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Icon } from '@/shared/ui/Icon/Icon';
import StarIcon from '../../assets/icons/star.svg';

interface StarRatingProps {
    className?: string;
    size?: number;
    onSelect?: (starCount: number) => void;
    selectedStars?: number;
}

const stars = [1, 2, 3, 4, 5];

export const StarRating = memo((props: StarRatingProps) => {
    const { className, selectedStars = 0, size = 30, onSelect } = props;
    const [isSelected, setIsSelected] = useState(Boolean(selectedStars));
    const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars);

    const onHover = (starsCount: number) => {
        if (!isSelected) {
            setCurrentStarsCount(starsCount);
        }
    };

    const onLeave = () => {
        if (!isSelected) {
            setCurrentStarsCount(0);
        }
    };

    const onClickHandler = (starNumber: number) => {
        if (!isSelected) {
            setCurrentStarsCount(starNumber);
            setIsSelected(true);
            onSelect?.(starNumber);
        }
    };

    return (
        <div className={classNames(cls.StarRating, {}, [className])}>
            {stars.map((starNumber) => (
                <Icon
                    className={classNames(cls.starIcon, { [cls.selected]: isSelected }, [
                        currentStarsCount >= starNumber ? cls.hovered : cls.normal,
                    ])}
                    key={starNumber}
                    Svg={StarIcon}
                    height={size}
                    width={size}
                    onMouseEnter={() => onHover(starNumber)}
                    onMouseLeave={onLeave}
                    onClick={() => onClickHandler(starNumber)}
                />
            ))}
        </div>
    );
});
