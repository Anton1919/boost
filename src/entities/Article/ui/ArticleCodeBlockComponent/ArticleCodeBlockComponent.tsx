import { Code } from '@/shared/ui/Code/Code';
import { ArticleCodeBlock } from '../../model/types/article';

interface ArticleCodeBlockComponentProps {
    className?: string;
    block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = ({ className, block }: ArticleCodeBlockComponentProps) => (
    <div>
        <Code text={block.code} />
    </div>
);
