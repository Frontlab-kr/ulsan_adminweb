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
} from 'reactstrap';

//import components
import Breadcrumbs from '../../components/Common/Breadcrumb';
import TableContainer from '../../components/Common/TableContainer';
import Select from 'react-select';

const UlWebUser02 = () => {
  const columns = useMemo(
    () => [
      {
        header: '상태',
        accessorKey: 'column01',
        enableColumnFilter: false,
        enableSorting: true,
      },
      {
        header: '부스명',
        accessorKey: 'column02',
        enableColumnFilter: false,
        enableSorting: true,
      },
      {
        header: '부스 위치',
        accessorKey: 'column03',
        enableColumnFilter: false,
        enableSorting: true,
      },
      {
        header: '키오스크',
        accessorKey: 'column04',
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
        header: '측정장비',
        accessorKey: 'column05',
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
        header: '등록자',
        accessorKey: 'column06',
        enableColumnFilter: false,
        enableSorting: true,
      },
      {
        header: '운영자',
        accessorKey: 'column07',
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
        header: '등록일시',
        accessorKey: 'column06',
        enableColumnFilter: false,
        enableSorting: true,
      },
      {
        header: '관리',
        accessorKey: 'column09',
        enableColumnFilter: false,
        cell: (cellProps) => {
          return (
            <div className="d-flex flex-wrap gap-2">
              <Button
                type="button"
                className="btn btn-sm btn-soft-primary waves-effect waves-light"
                onClick={() => {
                  setmodal_06(!modal_06);
                }}
              >
                수정
              </Button>
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
      column01: '사용',
      column02: '복합혁신센터 로비',
      column03: '울산광역시 중구 달빛로 65-29 1층',
      column04: '2',
      column05: '4',
      column06: '김*동',
      column07: '8',
      column08: '2021-01-01 14:20',
    },
    {
      column01: '사용',
      column02: '복합혁신센터 로비',
      column03: '울산광역시 중구 달빛로 65-29 1층',
      column04: '2',
      column05: '4',
      column06: '김*동',
      column07: '8',
      column08: '2021-01-01 14:20',
    },
    {
      column01: '사용',
      column02: '복합혁신센터 로비',
      column03: '울산광역시 중구 달빛로 65-29 1층',
      column04: '2',
      column05: '4',
      column06: '김*동',
      column07: '8',
      column08: '2021-01-01 14:20',
    },
    {
      column01: '사용',
      column02: '복합혁신센터 로비',
      column03: '울산광역시 중구 달빛로 65-29 1층',
      column04: '2',
      column05: '4',
      column06: '김*동',
      column07: '8',
      column08: '2021-01-01 14:20',
    },
    {
      column01: '사용',
      column02: '복합혁신센터 로비',
      column03: '울산광역시 중구 달빛로 65-29 1층',
      column04: '2',
      column05: '4',
      column06: '김*동',
      column07: '8',
      column08: '2021-01-01 14:20',
    },
    {
      column01: '사용',
      column02: '복합혁신센터 로비',
      column03: '울산광역시 중구 달빛로 65-29 1층',
      column04: '2',
      column05: '4',
      column06: '김*동',
      column07: '8',
      column08: '2021-01-01 14:20',
    },
    {
      column01: '사용',
      column02: '복합혁신센터 로비',
      column03: '울산광역시 중구 달빛로 65-29 1층',
      column04: '2',
      column05: '4',
      column06: '김*동',
      column07: '8',
      column08: '2021-01-01 14:20',
    },
    {
      column01: '사용',
      column02: '복합혁신센터 로비',
      column03: '울산광역시 중구 달빛로 65-29 1층',
      column04: '2',
      column05: '4',
      column06: '김*동',
      column07: '8',
      column08: '2021-01-01 14:20',
    },
    {
      column01: '사용',
      column02: '복합혁신센터 로비',
      column03: '울산광역시 중구 달빛로 65-29 1층',
      column04: '2',
      column05: '4',
      column06: '김*동',
      column07: '8',
      column08: '2021-01-01 14:20',
    },
    {
      column01: '사용',
      column02: '복합혁신센터 로비',
      column03: '울산광역시 중구 달빛로 65-29 1층',
      column04: '2',
      column05: '4',
      column06: '김*동',
      column07: '8',
      column08: '2021-01-01 14:20',
    },
  ];

  const [selectedMulti, setselectedMulti] = useState(null);

  const optionGroup = [
    {
      label: '복합혁신센터 로비',
      value: '복합혁신센터 로비',
    },
    {
      label: '복합혁신센터 헬스장',
      value: '복합혁신센터 헬스장',
    },
    {
      label: 'OO도서관',
      value: 'OO도서관',
    },
    {
      label: 'OO복지관',
      value: 'OO복지관',
    },
  ];

  function handleMulti(selectedMulti) {
    setselectedMulti(selectedMulti);
  }

  //meta title
  document.title = 'UL-WEB-MNG-01';

  const [modal_01, setmodal_01] = useState(false);
  const [modal_02, setmodal_02] = useState(false);
  const [modal_03, setmodal_03] = useState(false);
  const [modal_04, setmodal_04] = useState(false);
  const [modal_05, setmodal_05] = useState(false);
  const [modal_06, setmodal_06] = useState(false);
  const [modal_07, setmodal_07] = useState(false);
  const [modal_08, setmodal_08] = useState(false);

  return (
    <React.Fragment>
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumbs title="시스템운영" breadcrumbItem="부스 관리" />

          <div>
            <Row className="mb-2">
              <Col>
                <Button
                  type="button"
                  color="primary"
                  onClick={() => {
                    setmodal_02(!modal_02);
                  }}
                >
                  <i className="bx bx-plus font-size-16 align-middle me-2"></i>{' '}
                  신규 등록
                </Button>
              </Col>
              <Col>
                <div className="d-flex justify-content-end gap-2">
                  <select className="form-select w-auto">
                    <option>상태 전체</option>
                    <option>활성</option>
                    <option>비활성</option>
                  </select>

                  <select className="form-select w-auto">
                    <option>부스 전체</option>
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
          키오스크 목록
        </Button>

        <Button
          color="secondary"
          className="btn-sm"
          onClick={() => {
            setmodal_02(!modal_02);
          }}
        >
          측정장비 목록
        </Button>

        <Button
          color="secondary"
          className="btn-sm"
          onClick={() => {
            setmodal_03(!modal_03);
          }}
        >
          운영자 목록
        </Button>

        <Button
          color="secondary"
          className="btn-sm"
          onClick={() => {
            setmodal_04(!modal_04);
          }}
        >
          삭제 불가
        </Button>

        <Button
          color="secondary"
          className="btn-sm"
          onClick={() => {
            setmodal_05(!modal_05);
          }}
        >
          부스 등록, 수정
        </Button>

        <Button
          color="secondary"
          className="btn-sm"
          onClick={() => {
            setmodal_06(!modal_06);
          }}
        >
          입력항목 누락
        </Button>

        <Button
          color="secondary"
          className="btn-sm"
          onClick={() => {
            setmodal_07(!modal_07);
          }}
        >
          부스 삭제
        </Button>

        <Button
          color="secondary"
          className="btn-sm"
          onClick={() => {
            setmodal_08(!modal_08);
          }}
        >
          부스 삭제
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
          <h5 className="modal-title mt-0">키오스크 목록</h5>
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
                  <th>키오스크 ID</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>OOOOOOO</td>
                </tr>
                <tr>
                  <td>OOOOOOO</td>
                </tr>
                <tr>
                  <td>OOOOOOO</td>
                </tr>
                <tr>
                  <td>OOOOOOO</td>
                </tr>
                <tr>
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
          <h5 className="modal-title mt-0">측정장비 등록</h5>
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
              setmodal_02(!modal_02);
            }}
            className="btn btn-primary w-xs"
          >
            확인
          </button>
        </div>
      </Modal>
      <Modal
        isOpen={modal_03}
        toggle={() => {
          setmodal_03(!modal_03);
        }}
        centered
      >
        <div className="modal-header">
          <h5 className="modal-title mt-0">운영자 목록</h5>
          <button
            type="button"
            onClick={() => {
              setmodal_03(!modal_03);
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
                  <th>운영자 목록</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>김길동</td>
                </tr>
                <tr>
                  <td>김철수</td>
                </tr>
                <tr>
                  <td>박철수</td>
                </tr>
                <tr>
                  <td>최영희</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            onClick={() => {
              setmodal_03(!modal_03);
            }}
            className="btn btn-primary w-xs"
          >
            확인
          </button>
        </div>
      </Modal>
      <Modal
        size="sm"
        isOpen={modal_04}
        toggle={() => {
          setmodal_04(!modal_04);
        }}
        centered
      >
        <div className="modal-body">
          <div className="p-3 text-center">
            <i className="mdi mdi-alert fs-2 text-warning" />
            <br />
            <strong className="fs-5">삭제 불가</strong>
          </div>
          <p className="text-center">
            사용중인 키오스크가 있는 부스는
            <br />
            삭제할 수 없습니다.
          </p>
          <div className="mt-4">
            <button
              type="button"
              className="btn btn-primary w-100"
              onClick={() => {
                setmodal_04(false);
              }}
            >
              확인
            </button>
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={modal_05}
        toggle={() => {
          setmodal_05(!modal_05);
        }}
        centered
      >
        <div className="modal-header">
          <h5 className="modal-title mt-0">부스 등록</h5>
          <button
            type="button"
            onClick={() => {
              setmodal_05(!modal_05);
            }}
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <Form className="form-horizontal">
            <div className="mb-4">
              <Label className="form-label">
                부스명 <span className="text-danger">*</span>
              </Label>
              <Input
                className="form-control"
                placeholder="부스명을 입력하세요."
                type="text"
              />
            </div>

            <div className="mb-4">
              <Label className="form-label">
                부스 위치 <span className="text-danger">*</span>
              </Label>
              <div className="d-flex gap-2">
                <div className="w-100">
                  <Input
                    className="form-control"
                    placeholder="위도(예: 37.551125)"
                    type="text"
                  />
                </div>
                <div className="w-100">
                  <Input
                    className="form-control"
                    placeholder="경도(예: 127.049658)"
                    type="text"
                  />
                </div>
              </div>
              <div className="w-100 mt-2">
                <Input
                  className="form-control"
                  placeholder="상세주소 입력"
                  type="text"
                />
              </div>
            </div>
          </Form>
        </div>
        <div className="modal-footer justify-content-between">
          <div className="form-check form-switch form-switch-md">
            <input
              type="checkbox"
              className="form-check-input"
              id="customSwitchsizemd"
            />
            <label className="form-check-label" htmlFor="customSwitchsizemd">
              사용
            </label>
          </div>

          <div>
            <button
              type="button"
              onClick={() => {
                setmodal_05(!modal_05);
              }}
              className="btn btn-secondary m-1 w-xs"
              data-dismiss="modal"
            >
              취소
            </button>
            <button type="button" className="btn btn-primary m-1 w-xs">
              등록
            </button>
          </div>
        </div>
      </Modal>
      <Modal
        size="sm"
        isOpen={modal_06}
        toggle={() => {
          setmodal_06(!modal_06);
        }}
        centered
      >
        <div className="modal-body">
          <div className="p-3 text-center">
            <i className="mdi mdi-alert fs-2 text-warning" />
            <br />
            <strong className="fs-5">입력항목 누락</strong>
          </div>
          <p className="text-center">부스명을 입력해주세요</p>
          <div className="mt-4">
            <button
              type="button"
              className="btn btn-primary w-100"
              onClick={() => {
                setmodal_06(false);
              }}
            >
              확인
            </button>
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={modal_07}
        toggle={() => {
          setmodal_07(!modal_07);
        }}
        centered
      >
        <div className="modal-header">
          <h5 className="modal-title mt-0">부스 삭제</h5>
          <button
            type="button"
            onClick={() => {
              setmodal_07(!modal_07);
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
            부스를 삭제하시겠습니까?
            <br />
            삭제 시 복구할 수 없습니다.
          </p>
        </div>
        <div className="modal-footer ">
          <button
            type="button"
            onClick={() => {
              setmodal_07(!modal_07);
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
      <Modal
        size="sm"
        isOpen={modal_08}
        toggle={() => {
          setmodal_08(!modal_08);
        }}
        centered
      >
        <div className="modal-body">
          <div className="p-3 text-center">
            <i className="mdi mdi-thumb-up fs-3 text-primary" />
            <br />
            <strong className="fs-5">부스 삭제</strong>
          </div>
          <p className="text-center">삭제되었습니다.</p>
          <div className="mt-4">
            <button
              type="button"
              className="btn btn-primary w-100"
              onClick={() => {
                setmodal_08(false);
              }}
            >
              확인
            </button>
          </div>
        </div>
      </Modal>
    </React.Fragment>
  );
};
UlWebUser02.propTypes = {
  preGlobalFilteredRows: PropTypes.any,
};

export default UlWebUser02;
