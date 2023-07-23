import styles from './left-menu.module.scss';
import {TreeItem as MuiTreeItem, TreeView} from "@mui/lab";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {styled} from "@mui/material";
import {Fragment, useContext} from "react";
import {AppStoreContext} from "../app";

/* eslint-disable-next-line */
export interface LeftMenuProps {
}

export type UniqueID = string;

export type Debtor = {
  workUnitId: string,
  name: string
}

export type Case =  {"workUnitId": UniqueID,
  "package": string,
  "status": number
}

export type Unit = {
  debtors?: Debtor[], others?: any[], cases?: Case[], workUnitId: UniqueID, bailiffName: string
};

const TreeItem = styled(MuiTreeItem)`
  & > .MuiTreeItem-content.Mui-selected,
  & > .MuiTreeItem-content.Mui-selected.Mui-focused {
    color: white;
    background-color: #ea0029;
    border-radius: 5px;
  }

  & > .MuiTreeItem-content.Mui-selected:hover {
    color: black;
    background-color: #e0eef0;
    border-radius: 5px;
  }


  & > .MuiTreeItem-content:hover {
    border-radius: 5px;
    background-color: #e0eef0;
  }
`;


function hasDebtors(unit: Unit): boolean {
  if (unit.debtors && unit.debtors.length) {
    return true;
  }
  return false;
}

function extractDebtors(debtors: Debtor[], itemId: UniqueID) {
  return (
    <TreeItem nodeId={`${itemId}#debtors`} label={`Длъжници (${debtors.length})`}>
      {debtors.map((item, index) => (
        <Fragment key={item.workUnitId}>
          <TreeItem nodeId={item.workUnitId} label={item.name}>
          </TreeItem>
        </Fragment>
      ))}
    </TreeItem>
  )
}

function hasCases(unit: Unit): boolean {
  if (unit.cases && unit.cases.length) {
    return true;
  }
  return false;
}

function extractCases(cases: Case[], itemId: UniqueID) {
  return (
    <TreeItem nodeId={`${itemId}#cases`} label={`Случаи (${cases.length})`}>
      {cases.map((item, index) => (
        <Fragment key={item.workUnitId}>
          <TreeItem nodeId={item.workUnitId} label={item.package}>
          </TreeItem>
        </Fragment>
      ))}
    </TreeItem>
  )
}


export function LeftMenu(props: LeftMenuProps) {

  const appStore = useContext(AppStoreContext);

  return (
    <div className={styles.container}>
      <TreeView aria-label="file system navigator"
                defaultCollapseIcon={<ExpandMoreIcon/>}
                defaultExpandIcon={<ChevronRightIcon/>}>
        {appStore.workUnits.map((item, index) => (
          <Fragment key={index}>
            <TreeItem nodeId={item.workUnitId} label={item.bailiffName}>
              <Fragment key={item.workUnitId}>
                {hasDebtors(item) && extractDebtors(item.debtors, item.workUnitId)}
                {hasCases(item) && extractCases(item.cases, item.workUnitId)}
              </Fragment>
            </TreeItem>
          </Fragment>
        ))}
      </TreeView>
    </div>);
}

export default LeftMenu;
