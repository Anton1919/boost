import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Icon } from 'shared/ui/Icon/Icon';
import { memo } from 'react';
import { ArticleView } from '../../model/const/const';
import cls from './ArticleViewSelector.module.scss';
import ListIcon from '../../../../shared/assets/icons/list-24-24.svg';
import TiledIcon from '../../../../shared/assets/icons/tiled-24-24.svg';

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView;
    onViewClick: (view: ArticleView) => void;
}

const viewTypes = [
    { view: ArticleView.SMALL, icon: TiledIcon },
    { view: ArticleView.BIG, icon: ListIcon },
];

export const ArticleViewSelector = memo(
    ({ className, onViewClick, view }: ArticleViewSelectorProps) => {
        const onClick = (newView: ArticleView) => () => {
            onViewClick(newView);
        };

        return (
            <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
                {viewTypes.map((viewType) => (
                    <Button
                        key={viewType.view}
                        theme={ButtonTheme.CLEAR}
                        onClick={onClick(viewType.view)}
                    >
                        <Icon
                            className={classNames(
                                '',
                                { [cls.notSelected]: viewType.view !== view },
                                [],
                            )}
                            Svg={viewType.icon}
                        />
                    </Button>
                ))}
            </div>
        );
    },
);
