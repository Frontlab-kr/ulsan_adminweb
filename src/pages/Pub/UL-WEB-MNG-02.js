// src/components/filter.
import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Row,
  Table,
  Col,
  Form,
  Input,
  FormFeedback,
  Label,
  Button,
  Modal,
  InputGroup,
} from 'reactstrap';

//import components
import Breadcrumbs from '../../components/Common/Breadcrumb';
import TableContainer from '../../components/Common/TableContainer';
import Select from 'react-select';

//Import Flatepicker
import 'flatpickr/dist/themes/material_blue.css';
import Flatpickr from 'react-flatpickr';
import { Korean } from 'flatpickr/dist/l10n/ko.js';

const UlWebUser02 = () => {
  const columns = useMemo(
    () => [
      {
        header: '키오스크ID',
        accessorKey: 'column01',
        enableColumnFilter: false,
        enableSorting: true,
      },
      {
        header: '키오스크 위치',
        accessorKey: 'column02',
        enableColumnFilter: false,
        enableSorting: true,
      },
      {
        header: '측정장비',
        accessorKey: 'column03',
        enableColumnFilter: false,
        enableSorting: true,
        cell: (cellProps) => {
          return (
            <div className="d-flex flex-wrap gap-2">
              <Button
                color="link"
                className="btn btn-sm btn-link"
                onClick={() => {
                  setmodal_01(!modal_01);
                }}
              >
                8
              </Button>
            </div>
          );
        },
      },
      {
        header: '버전',
        accessorKey: 'column04',
        enableColumnFilter: false,
        enableSorting: true,
      },
      {
        header: '최종 업그레이드',
        accessorKey: 'column05',
        enableColumnFilter: false,
        enableSorting: true,
      },
      {
        header: '등록일시',
        accessorKey: 'column06',
        enableColumnFilter: false,
        enableSorting: true,
      },
      {
        header: '관리',
        accessorKey: 'column07',
        enableColumnFilter: false,

        cell: (cellProps) => {
          switch (cellProps.row.original.column07) {
            case 'complete':
              return (
                <Button
                  type="button"
                  className="btn btn-sm btn-soft-danger waves-effect waves-light"
                  disabled
                >
                  삭제 완료
                </Button>
              );
            default:
              return (
                <Button
                  type="button"
                  className="btn btn-sm btn-soft-danger waves-effect waves-light"
                  onClick={() => {
                    setmodal_07(!modal_07);
                  }}
                >
                  삭제
                </Button>
              );
          }
        },
      },
    ],
    []
  );

  const data = [
    {
      column01: 'KI12345678',
      column02: '복합혁신센터 로비',
      column03: '4',
      column04: 'v.1.0.1',
      column05: '2024-01-01 14:20',
      column06: '2024-01-01 14:20',
      column07: 'complete',
    },
    {
      column01: 'KI12345678',
      column02: '복합혁신센터 로비',
      column03: '4',
      column04: 'v.1.0.1',
      column05: '2024-01-01 14:20',
      column06: '2024-01-01 14:20',
      column07: '',
    },
    {
      column01: 'KI12345678',
      column02: '복합혁신센터 로비',
      column03: '4',
      column04: 'v.1.0.1',
      column05: '2024-01-01 14:20',
      column06: '2024-01-01 14:20',
      column07: 'complete',
    },
    {
      column01: 'KI12345678',
      column02: '복합혁신센터 로비',
      column03: '4',
      column04: 'v.1.0.1',
      column05: '2024-01-01 14:20',
      column06: '2024-01-01 14:20',
      column07: '',
    },
    {
      column01: 'KI12345678',
      column02: '복합혁신센터 로비',
      column03: '4',
      column04: 'v.1.0.1',
      column05: '2024-01-01 14:20',
      column06: '2024-01-01 14:20',
      column07: 'complete',
    },
    {
      column01: 'KI12345678',
      column02: '복합혁신센터 로비',
      column03: '4',
      column04: 'v.1.0.1',
      column05: '2024-01-01 14:20',
      column06: '2024-01-01 14:20',
      column07: '',
    },
    {
      column01: 'KI12345678',
      column02: '복합혁신센터 로비',
      column03: '4',
      column04: 'v.1.0.1',
      column05: '2024-01-01 14:20',
      column06: '2024-01-01 14:20',
      column07: 'complete',
    },
    {
      column01: 'KI12345678',
      column02: '복합혁신센터 로비',
      column03: '4',
      column04: 'v.1.0.1',
      column05: '2024-01-01 14:20',
      column06: '2024-01-01 14:20',
      column07: '',
    },
  ];

  //meta title
  document.title = 'UL-WEB-MNG-02';

  const [modal_01, setmodal_01] = useState(false);
  const [modal_02, setmodal_02] = useState(false);

  return (
    <React.Fragment>
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumbs title="시스템운영" breadcrumbItem="키오스크 관리" />

          <div>
            <Row className="mb-2">
              <Col></Col>
              <Col>
                <div className="d-flex justify-content-end gap-2">
                  <select className="form-select w-auto">
                    <option>키오스크ID</option>
                    <option>키오스크 위치</option>
                  </select>

                  <input
                    className="form-control w-auto"
                    type="text"
                    placeholder="검색어를 입력하세요."
                    style={{ minWidth: '300px' }}
                  />
                </div>
              </Col>
            </Row>

            <TableContainer
              columns={columns}
              data={data || []}
              isGlobalFilter={false}
              isPagination={true}
              isCustomPageSize={true}
              pagination="pagination"
              paginationWrapper="dataTables_paginate paging_simple_numbers"
              tableClass="table-bordered table-nowrap dt-responsive nowrap w-100 dataTable no-footer dtr-inline"
            />
          </div>
        </div>
      </div>
      <div
        className="position-fixed bottom-0 end-0 p-2 d-flex flex-column gap-2"
        style={{ zIndex: '10000' }}
      >
        <Button
          color="secondary"
          className="btn-sm"
          onClick={() => {
            setmodal_01(!modal_01);
          }}
        >
          측정장비 목록
        </Button>

        <Button
          color="secondary"
          className="btn-sm"
          onClick={() => {
            setmodal_02(!modal_02);
          }}
        >
          삭제 확인
        </Button>
      </div>
      <Modal
        isOpen={modal_01}
        toggle={() => {
          setmodal_01(!modal_01);
        }}
        centered
      >
        <div className="modal-header">
          <h5 className="modal-title mt-0">측정장비 목록</h5>
          <button
            type="button"
            onClick={() => {
              setmodal_01(!modal_01);
            }}
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <div className="table-responsive">
            <Table className="table mb-0">
              <thead className="table-light">
                <tr>
                  <th>측정항목</th>
                  <th>모델명</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>악력</td>
                  <td>InGrip</td>
                </tr>
                <tr>
                  <td>혈압</td>
                  <td>OOOOOOO</td>
                </tr>
                <tr>
                  <td>신장체중</td>
                  <td>OOOOOOO</td>
                </tr>
                <tr>
                  <td>체성분</td>
                  <td>OOOOOOO</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            onClick={() => {
              setmodal_01(!modal_01);
            }}
            className="btn btn-primary w-xs"
          >
            확인
          </button>
        </div>
      </Modal>
      <Modal
        isOpen={modal_02}
        toggle={() => {
          setmodal_02(!modal_02);
        }}
        centered
      >
        <div className="modal-header">
          <h5 className="modal-title mt-0">삭제 확인</h5>
          <button
            type="button"
            onClick={() => {
              setmodal_02(!modal_02);
            }}
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <p>
            <strong>
              키오스크 정보를 삭제하면 복구할 수 없습니다. <br />
              삭제하시겠습니까?
            </strong>
          </p>
        </div>
        <div className="modal-footer ">
          <button
            type="button"
            onClick={() => {
              setmodal_02(!modal_02);
            }}
            className="btn btn-secondary m-1 w-xs"
            data-dismiss="modal"
          >
            취소
          </button>
          <button type="button" className="btn btn-primary m-1 w-xs">
            삭제
          </button>
        </div>
      </Modal>
    </React.Fragment>
  );
};
UlWebUser02.propTypes = {
  preGlobalFilteredRows: PropTypes.any,
};

export default UlWebUser02;
