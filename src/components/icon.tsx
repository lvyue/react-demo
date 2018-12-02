import React, { SFC } from 'react';

const Icon: SFC<string> = (icon: string) => <i className={['fas', icon].join(' ')} />;

export default Icon;
