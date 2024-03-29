import { HTMLAttributeAnchorTarget } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import { Text } from '@/shared/ui/Text';
import { Icon } from '@/shared/ui/Icon';
import { Card } from '@/shared/ui/Card';
import { useHover } from '@/shared/lib/hooks/useHover/useHover';
import { Avatar } from '@/shared/ui/Avatar';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { AppLink } from '@/shared/ui/AppLink';
import { ArticleBlockType, ArticleView } from '../../model/const/const';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import cls from './ArticleListItem.module.scss';
import { Article, ArticleTextBlock } from '../../model/types/article';
import { RoutePath } from '@/shared/const/router';
import { AppImage } from '@/shared/ui/AppImage';
import { Skeleton } from '@/shared/ui/Skeleton';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = (props: ArticleListItemProps) => {
    const { view, article, className, target } = props;
    const [isHover, bindHover] = useHover();

    if (view === ArticleView.BIG) {
        const textBlock = article.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT,
        ) as ArticleTextBlock;

        return (
            <div
                data-testid="ArticleListItem"
                className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
                {...bindHover}
            >
                <Card>
                    <div className={cls.header}>
                        <Avatar size={30} src={article.user.avatar} />
                        <Text text={article.user.username} className={cls.username} />
                        <Text className={cls.date} text={article.createdAt} />
                    </div>
                    <Text title={article.title} className={cls.title} />
                    <Text className={cls.types} text={article.type.join(', ')} />
                    <AppImage
                        fallback={<Skeleton width="100%" height={250} />}
                        src={article.img}
                        alt={article.title}
                        className={cls.img}
                    />
                    {textBlock && (
                        <ArticleTextBlockComponent block={textBlock} className={cls.textBlock} />
                    )}
                    <div className={cls.footer}>
                        <AppLink target={target} to={RoutePath.article_details + article.id}>
                            {/* eslint-disable-next-line i18next/no-literal-string */}
                            <Button theme={ButtonTheme.OUTLINE}>Читать далее...</Button>
                        </AppLink>
                        {/* eslint-disable-next-line i18next/no-literal-string */}
                        <Text className={cls.views} text={article.views.toString()} />
                        <Icon Svg={EyeIcon} />
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <AppLink
            data-testid="ArticleListItem"
            target={target}
            to={RoutePath.article_details + article.id}
            {...bindHover}
            className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
        >
            <Card>
                <div className={cls.imageWrapper}>
                    <AppImage
                        fallback={<Skeleton width={200} height={200} />}
                        className={cls.img}
                        src={article.img}
                        alt={article.title}
                    />
                    <Text className={cls.date} text={article.createdAt} />
                </div>
                <div className={cls.infoWrapper}>
                    <Text className={cls.types} text={article.type.join(', ')} />
                    <Text className={cls.views} text={article.views.toString()} />
                    <Icon Svg={EyeIcon} />
                </div>
                <Text className={cls.title} text={article.title} />
            </Card>
        </AppLink>
    );
};
