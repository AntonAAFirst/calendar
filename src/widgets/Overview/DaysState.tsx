import { useAppSelector } from "../../shared/store/hooks";
import InfoBlock from "../../shared/UI/Overview/InfoBlock";

export default function DaysState() {
  const allDollars = useAppSelector((state) => state.overview.allDollars);
  const booksRead = useAppSelector((state) => state.overview.booksRead);
  const pagesOfYourBook = useAppSelector(
    (state) => state.overview.pagesOfYourBook
  );

  const dollarsBlockText: string = `If you started saving $5 a day at age 18 you would have ${allDollars}
    by this time`;

  const booksBlockText = `If you finish reading 1 book a month, you will read ${booksRead} new
    books by this time`;

  const pagesOfYourBookBlockText = `If you start writing 1 page a day of your book, ${pagesOfYourBook}
    pages will have been written by this time!`;

  return (
    <div className="days-state">
      <InfoBlock header={"$" + allDollars.toString()} text={dollarsBlockText} />
      <InfoBlock header={"$" + booksRead.toString()} text={booksBlockText} />
      <InfoBlock
        header={pagesOfYourBook.toString()}
        text={pagesOfYourBookBlockText}
      />
    </div>
  );
}
