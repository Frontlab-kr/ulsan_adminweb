// src/components/filter.
import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Row, Table, Button, Col } from 'reactstrap';

//import components
import Breadcrumbs from '../../components/Common/Breadcrumb';
import TableContainer from '../../components/Common/TableContainer';

const PUB = () => {
  const columns = useMemo(
    () => [
      {
        header: '상태',
        accessorKey: 'column01',
        enableColumnFilter: false,
        enableSorting: true,
      },
      {
        header: '권한',
        accessorKey: 'column02',
        enableColumnFilter: false,
        enableSorting: true,
      },
      {
        header: '이름',
        accessorKey: 'column03',
        enableColumnFilter: false,
        enableSorting: true,
      },
      {
        header: '아이디',
        accessorKey: 'column04',
        enableColumnFilter: false,
        enableSorting: true,
      },
      {
        header: '연락처',
        accessorKey: 'column05',
        enableColumnFilter: false,
        enableSorting: true,
      },
      {
        header: '조회부스',
        accessorKey: 'column06',
        enableColumnFilter: false,
        enableSorting: true,
      },
      {
        header: '등록일',
        accessorKey: 'column07',
        enableColumnFilter: false,
        enableSorting: true,
      },
      {
        header: '관리',
        accessorKey: 'column08',
        enableColumnFilter: false,
        cell: (cellProps) => {
          return (
            <div className="d-flex flex-wrap gap-2">
              <Button
                type="button"
                className="btn btn-sm btn-soft-primary waves-effect waves-light"
              >
                수정
              </Button>
              <Button
                type="button"
                className="btn btn-sm btn-soft-danger waves-effect waves-light"
              >
                삭제
              </Button>
            </div>
          );
        },
      },
    ],
    []
  );

  const data = [
    {
      column01: '활성',
      column02: '관리자',
      column03: '홍*동',
      column04: 'abcd12345',
      column05: '010****1234',
      column06: '8',
      column07: '2025-01-01 14:20',
      column08: 'Jennifer',
    },
  ];

  //meta title
  document.title = 'UL-WEB-USER-01';

  return (
    <div className="page-content">
      <div className="container-fluid">
        <div className="mb-4">
          <h3>로그인</h3>
          <Table className="table mb-0">
            <tbody>
              <tr>
                <td>
                  <Link to={'/UL-WEB-LOGIN-01'}>UL-WEB-LOGIN-01</Link>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className="mb-4">
          <h3>시스템운영</h3>
          <Table className="table mb-0">
            <tbody>
              <tr>
                <td>
                  <Link to={'/UL-WEB-USER-01'}>UL-WEB-USER-01</Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link to={'/UL-WEB-MNG-01'}>UL-WEB-MNG-01</Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link to={'/UL-WEB-MNG-02'}>UL-WEB-MNG-02</Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link to={'/UL-WEB-MNG-03'}>UL-WEB-MNG-03</Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link to={'/UL-WEB-MNG-04'}>UL-WEB-MNG-04</Link>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default PUB;
