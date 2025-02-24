// src/components/filter.
import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Row, Table, Col, Form, Input, Label, Button, Modal } from 'reactstrap';

//import components
import Breadcrumbs from '../../components/Common/Breadcrumb';
import TableContainer from '../../components/Common/TableContainer';
import Select from 'react-select';

const UlWebUser01 = () => {
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
                onClick={() => {
                  setmodal_03(!modal_03);
                }}
              >
                수정
              </Button>
              <Button
                type="button"
                className="btn btn-sm btn-soft-danger waves-effect waves-light"
                onClick={() => {
                  setmodal_04(!modal_04);
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
      column01: '활성',
      column02: '관리자',
      column03: '홍*동',
      column04: 'abcd12345',
      column05: '010****1234',
      column06: '8',
      column07: '2025-01-01 14:20',
      column08: 'Jennifer',
    },
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
  document.title = 'UL-WEB-USER-01';

  const [modal_01, setmodal_01] = useState(false);
  const [modal_02, setmodal_02] = useState(false);
  const [modal_03, setmodal_03] = useState(false);
  const [modal_04, setmodal_04] = useState(false);

  return (
    <React.Fragment>
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumbs title="시스템운영" breadcrumbItem="웹 사용자 관리" />

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
                  웹 사용자 등록
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

                  <select className="form-select w-auto">
                    <option>이름</option>
                    <option>아이디</option>
                    <option>연락처</option>
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
          부스 목록
        </Button>

        <Button
          color="secondary"
          className="btn-sm"
          onClick={() => {
            setmodal_02(!modal_02);
          }}
        >
          웹 사용자 등록
        </Button>

        <Button
          color="secondary"
          className="btn-sm"
          onClick={() => {
            setmodal_03(!modal_03);
          }}
        >
          웹 사용자 수정
        </Button>

        <Button
          color="secondary"
          className="btn-sm"
          onClick={() => {
            setmodal_04(!modal_04);
          }}
        >
          웹 사용자 삭제
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
          <h5 className="modal-title mt-0">부스 목록</h5>
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
              <tbody>
                <tr>
                  <td>복합혁신센터 로비</td>
                </tr>
                <tr>
                  <td>복합혁신센터 헬스장</td>
                </tr>
                <tr>
                  <td>OO도서관</td>
                </tr>
                <tr>
                  <td>OO복지관</td>
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
          <h5 className="modal-title mt-0">웹 사용자 등록</h5>
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
          <Form className="form-horizontal">
            <div className="mb-4">
              <Row>
                <Col md={5}>
                  <Label className="form-label">
                    권한 <span className="text-danger">*</span>
                  </Label>
                  <select className="form-select">
                    <option>권한을 선택하세요.</option>
                    <option>관리자</option>
                    <option>운영자</option>
                  </select>
                </Col>
                <Col md={7}>
                  <Label className="form-label">
                    이름 <span className="text-danger">*</span>
                  </Label>
                  <Input
                    className="form-control"
                    placeholder="이름을 입력하세요."
                    type="text"
                  />
                </Col>
              </Row>
            </div>

            <div className="mb-4">
              <Label className="form-label">
                로그인 아이디 <span className="text-danger">*</span>
              </Label>
              <div className="d-flex gap-2">
                <Input
                  name="email"
                  className="form-control"
                  placeholder="로그인 아이디를 입력하세요."
                  type="text"
                />
                <button
                  className="btn btn-primary btn-block text-nowrap"
                  type="submit"
                >
                  중복확인
                </button>
              </div>
            </div>

            <div className="mb-4">
              <Label className="form-label">
                모바일 연락처 <span className="text-danger">*</span>
              </Label>
              <div className="d-flex gap-2">
                <Input
                  name="email"
                  className="form-control"
                  placeholder="'-'를 빼고 숫자만 입력하세요."
                  type="text"
                />
                <button
                  className="btn btn-primary btn-block text-nowrap"
                  type="submit"
                >
                  중복확인
                </button>
              </div>
              <p className="m-0 mt-2 text-secondary">
                (※ 모바일 연락처로 로그인 임시 비밀번호가 전송됩니다.)
              </p>
            </div>

            <div className="mb-4">
              <Label className="form-label">
                관리부스 <span className="text-danger">*</span>
              </Label>
              <Select
                value={selectedMulti}
                isMulti={true}
                onChange={() => {
                  handleMulti();
                }}
                options={optionGroup}
                className="select2-selection"
              />
            </div>

            <div className="mb-4">
              <Label className="form-label">
                등록 사유 <span className="text-danger">*</span>
              </Label>
              <Input
                className="form-control"
                placeholder="내용을 입력하세요."
                type="text"
              />
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
              계정 활성
            </label>
          </div>

          <div>
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
              신규 등록
            </button>
          </div>
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
          <h5 className="modal-title mt-0">웹 사용자 수정</h5>
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
          <Form className="form-horizontal">
            <div className="mb-4">
              <Row>
                <Col md={5}>
                  <Label className="form-label">권한</Label>
                  <select className="form-select" disabled>
                    <option>권한을 선택하세요.</option>
                    <option selected>관리자</option>
                    <option>운영자</option>
                  </select>
                </Col>
                <Col md={7}>
                  <Label className="form-label">이름</Label>
                  <Input
                    className="form-control"
                    placeholder="이름을 입력하세요."
                    value={'홍길동'}
                    type="text"
                    disabled
                  />
                </Col>
              </Row>
            </div>

            <div className="mb-4">
              <Label className="form-label">로그인 아이디</Label>
              <div className="d-flex gap-2">
                <Input
                  name="email"
                  className="form-control"
                  placeholder="로그인 아이디를 입력하세요."
                  type="text"
                  value={'abc123456'}
                  disabled
                />
              </div>
            </div>

            <div className="mb-4">
              <Label className="form-label">모바일 연락처</Label>
              <div className="d-flex gap-2">
                <Input
                  name="email"
                  className="form-control"
                  placeholder="'-'를 빼고 숫자만 입력하세요."
                  type="text"
                  value={'010-1234-5678'}
                  disabled
                />
              </div>
              <p className="m-0 mt-2 text-secondary">
                (※ 모바일 연락처로 로그인 임시 비밀번호가 전송됩니다.)
              </p>
            </div>

            <div className="mb-4">
              <Label className="form-label">
                관리부스 <span className="text-danger">*</span>
              </Label>
              <Select
                value={selectedMulti}
                isMulti={true}
                onChange={() => {
                  handleMulti();
                }}
                options={optionGroup}
                className="select2-selection"
              />
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
              계정 활성
            </label>
          </div>

          <div>
            <button
              type="button"
              onClick={() => {
                setmodal_03(!modal_03);
              }}
              className="btn btn-secondary m-1 w-xs"
              data-dismiss="modal"
            >
              취소
            </button>
            <button type="button" className="btn btn-primary m-1 w-xs">
              저장
            </button>
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={modal_04}
        toggle={() => {
          setmodal_04(!modal_04);
        }}
        centered
      >
        <div className="modal-header">
          <h5 className="modal-title mt-0">웹 사용자 삭제</h5>
          <button
            type="button"
            onClick={() => {
              setmodal_04(!modal_04);
            }}
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <p className="mb-4">
            <strong>
              해당 사용자를 삭제하시겠습니까?
              <br />
              삭제 시 복구할 수 없습니다.
            </strong>
          </p>
          <Form className="form-horizontal">
            <div className="mb-4">
              <Label className="form-label">
                삭제 사유 <span className="text-danger">*</span>
              </Label>
              <Input
                className="form-control"
                placeholder="내용을 입력하세요."
                type="text"
              />
            </div>
          </Form>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            onClick={() => {
              setmodal_04(!modal_04);
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
UlWebUser01.propTypes = {
  preGlobalFilteredRows: PropTypes.any,
};

export default UlWebUser01;
