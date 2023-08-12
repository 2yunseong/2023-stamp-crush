import { PropsWithChildren } from 'react';
import SubHeader from '../../components/Header/SubHeader';

interface HistoryPageProps extends PropsWithChildren {
  title: string;
}

const HistoryPage = ({ title, children }: HistoryPageProps) => {
  return (
    <>
      <SubHeader title={title} />
      {children}
    </>
  );
};

export default HistoryPage;
