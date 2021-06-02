import styled from 'styled-components';

export const Title = styled.h1`
	display: flex;
	align-items: center;
	gap: 0.5rem;

	margin-bottom: 3rem;

	font-size: 2.75rem;
	font-weight: 500;
	text-transform: uppercase;

	&::before {
		content: '';
		background: var(--white);
		width: 42px;
		height: 5px;
		flex-shrink: 0;
		border-radius: 4px;
	}
`;