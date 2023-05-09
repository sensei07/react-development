import {TagsInput} from './TagsInput';
import {screen, render} from '@testing-library/react';
import userEvents from '@testing-library/user-event';
import {getByTestId} from '@testing-library/dom';

describe('TagsInput', () => {
    it('should render passes tags', () => {
        const tags = ['a', 'b', 'c'];

        render(<TagsInput tags={tags} onChange={() => {
        }}/>);

        const elements = screen.getAllByTestId('tag');

        expect(elements.length).toBe(tags.length);

        tags.forEach((tag, index) => {
            const tagElement = elements[index];
            expect(tagElement.textContent?.includes(tag)).toBe(true);
        });
    });

    it('should be able to remove tag', () => {
        const tags = ['a', 'b', 'c'];
        const onChangeFn = jest.fn();

        render(<TagsInput tags={tags} onChange={onChangeFn}/>);

        const element = screen.getAllByTestId('tag')[0];

        const elementDelete = getByTestId(element, 'tag-delete');

        userEvents.click(elementDelete);

        expect(onChangeFn).toBeCalledWith(['b', 'c']);
    });

    it('should add tag when typing comma', () => {
        const onChangeFn = jest.fn();

        const {rerender} = render(<TagsInput tags={[]} onChange={onChangeFn}/>);

        const element = screen.getByTestId('tags-input');

        userEvents.type(element, 'first-tag,');

        expect(onChangeFn).toBeCalledWith(['first-tag']);

        rerender(<TagsInput tags={['first-tag']} onChange={onChangeFn}/>);

        userEvents.type(element, 'second-tag,');

        expect(onChangeFn).toBeCalledWith(['first-tag', 'second-tag']);
    });

    it('should be able to add tag when pressing enter', () => {
        const onChangeFn = jest.fn();

        const {rerender} = render(<TagsInput tags={[]} onChange={onChangeFn}/>);

        const element = screen.getByTestId('tags-input');

        userEvents.type(element, 'first-tag{enter}');

        expect(onChangeFn).toBeCalledWith(['first-tag']);

        rerender(<TagsInput tags={['first-tag']} onChange={onChangeFn}/>);

        userEvents.type(element, 'second-tag{enter}');

        expect(onChangeFn).toBeCalledWith(['first-tag', 'second-tag']);
    });
});
