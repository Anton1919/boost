import { classNames } from 'shared/lib/classNames/classNames';
import { Comment } from 'entities/Comment';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { CommentCard } from 'entities/Comment/ui/CommentCard/CommentCard';
import cls from './CommentList.module.scss';

interface CommentListProps {
    className?: string
    comments?: Comment[]
    isLoading?: boolean

}

export const CommentList = ({ className, comments, isLoading }: CommentListProps) => {
    const { t } = useTranslation();

    if (isLoading) {
        return (
            <div className={classNames(cls.CommentList, {}, [className])}>
                <CommentCard isLoading />
                <CommentCard isLoading />
                <CommentCard isLoading />
            </div>
        );
    }

    return (
        <div className={classNames(cls.CommentList, {}, [className])}>
            {comments?.length
                ? comments.map((comment) => (
                    <CommentCard key={comment.id} className={cls.comment} comment={comment} />
                ))
                : <Text text={t('Комментариев нет')} />}
        </div>
    );
};
