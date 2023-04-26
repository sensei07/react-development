import {useState} from 'react';
import {TagsInput} from './TagsInput/TagsInput';

export const Tdd = () => {
    const [tags, setTags] = useState<string[]>(['tag1', 'tag2']);
    return (
        <div>
            <h1>Test dd</h1>
            <TagsInput tags={tags} onChange={setTags}/>
        </div>
    );
};
