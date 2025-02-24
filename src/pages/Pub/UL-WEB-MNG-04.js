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
  Card,
  CardTitle,
  CardBody,
} from 'reactstrap';

//import components
import Breadcrumbs from '../../components/Common/Breadcrumb';
import TableContainer from '../../components/Common/TableContainer';
import Select from 'react-select';

//Import Flatepicker
import 'flatpickr/dist/themes/material_blue.css';
import Flatpickr from 'react-flatpickr';
import { Korean } from 'flatpickr/dist/l10n/ko.js';

const UlWebUser04 = () => {
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
          return (
            <div className="d-flex flex-wrap gap-2">
              <Button
                type="button"
                className="btn btn-sm btn-soft-danger waves-effect waves-light"
                onClick={() => {
                  setmodal_07(!modal_07);
                }}
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
      column01: 'KI12345678',
      column02: '복합혁신센터 로비',
      column03: '4',
      column04: 'v.1.0.1',
      column05: '2024-01-01 14:20',
      column06: '2024-01-01 14:20',
    },
  ];

  //meta title
  document.title = 'UL-WEB-MNG-04';

  const [modal_01, setmodal_01] = useState(false);
  const [modal_02, setmodal_02] = useState(false);
  const [modal_03, setmodal_03] = useState(false);
  const [modal_04, setmodal_04] = useState(false);
  const [modal_05, setmodal_05] = useState(true);
  const [modal_06, setmodal_06] = useState(false);
  const [modal_07, setmodal_07] = useState(false);

  return (
    <React.Fragment>
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumbs title="시스템운영" breadcrumbItem="키 관리" />

          <Card>
            <CardBody>
              <CardTitle className="mb-4">키오스크</CardTitle>
              <div className="mb-4">
                <Label className="form-label">클라이언트 ID</Label>
                <div className="d-flex gap-2">
                  <Input
                    className="form-control"
                    type="text"
                    value={'asdfsaf212312'}
                    disabled
                  />
                  <Button type="button" color="primary" outline>
                    <i className="bx bx-copy font-size-18"></i>
                  </Button>
                </div>
              </div>
              <div className="mb-4">
                <Label className="form-label">클라이언트 Secret Key</Label>
                <div className="d-flex gap-2">
                  <Input
                    className="form-control"
                    type="text"
                    value={
                      'asdfsaf212312 asdfsaf212312 asdfsaf212312 asdfsaf212312 asdfsaf212312'
                    }
                    disabled
                  />
                  <Button type="button" color="primary" outline>
                    <i className="bx bx-copy font-size-18"></i>
                  </Button>
                </div>
              </div>
              <div className="text-end">
                <Button
                  color="primary"
                  className="btn btn-primary waves-effect waves-light w-lg"
                >
                  발급
                </Button>
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <CardTitle className="mb-4">모바일 웹</CardTitle>
              <div className="mb-4">
                <Label className="form-label">클라이언트 ID</Label>
                <div className="d-flex gap-2">
                  <Input
                    className="form-control"
                    type="text"
                    value={'asdfsaf212312'}
                    disabled
                  />
                  <Button type="button" color="primary" outline>
                    <i className="bx bx-copy font-size-18"></i>
                  </Button>
                </div>
              </div>
              <div className="mb-4">
                <Label className="form-label">클라이언트 Secret Key</Label>
                <div className="d-flex gap-2">
                  <Input
                    className="form-control"
                    type="text"
                    value={
                      'asdfsaf212312 asdfsaf212312 asdfsaf212312 asdfsaf212312 asdfsaf212312'
                    }
                    disabled
                  />
                  <Button type="button" color="primary" outline>
                    <i className="bx bx-copy font-size-18"></i>
                  </Button>
                </div>
              </div>
              <div className="text-end">
                <Button
                  color="primary"
                  className="btn btn-primary waves-effect waves-light w-lg"
                >
                  발급
                </Button>
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <CardTitle className="mb-4">관제 웹</CardTitle>
              <div className="mb-4">
                <Label className="form-label">클라이언트 ID</Label>
                <div className="d-flex gap-2">
                  <Input
                    className="form-control"
                    type="text"
                    value={'asdfsaf212312'}
                    disabled
                  />
                  <Button type="button" color="primary" outline>
                    <i className="bx bx-copy font-size-18"></i>
                  </Button>
                </div>
              </div>
              <div className="mb-4">
                <Label className="form-label">클라이언트 Secret Key</Label>
                <div className="d-flex gap-2">
                  <Input
                    className="form-control"
                    type="text"
                    value={
                      'asdfsaf212312 asdfsaf212312 asdfsaf212312 asdfsaf212312 asdfsaf212312'
                    }
                    disabled
                  />
                  <Button type="button" color="primary" outline>
                    <i className="bx bx-copy font-size-18"></i>
                  </Button>
                </div>
              </div>
              <div className="text-end">
                <Button
                  color="primary"
                  className="btn btn-primary waves-effect waves-light w-lg"
                >
                  발급
                </Button>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </React.Fragment>
  );
};
UlWebUser04.propTypes = {
  preGlobalFilteredRows: PropTypes.any,
};

export default UlWebUser04;
