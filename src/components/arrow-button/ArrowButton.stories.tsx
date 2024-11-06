import type { Meta, StoryObj } from '@storybook/react';
import { ArrowButton } from './ArrowButton';

const meta: Meta<typeof ArrowButton> = {
	component: ArrowButton,
};

export default meta;
type Story = StoryObj<typeof ArrowButton>;

const ArrowButtonStory = () => {
	return <ArrowButton isOpen={true} setIsOpen={() => console.log('')} />;
};

export const DefaultArrow: Story = {
	render: () => <ArrowButtonStory />,
};
