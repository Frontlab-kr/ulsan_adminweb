import PropTypes from 'prop-types';
import React, { useState } from 'react';

import {
  Row,
  Col,
  CardBody,
  Card,
  Container,
  Form,
  Input,
  FormFeedback,
  Label,
  Button,
  Modal,
} from 'reactstrap';

//redux
import { Link } from 'react-router-dom';
import withRouter from 'components/Common/withRouter';

// import images
import profile from 'assets/images/profile-img.png';
import logo from 'assets/images/logo.svg';

const Login = (props) => {
  //meta title
  document.title = 'UL-WEB-LOGIN-01';

  const [modal_01, setmodal_01] = useState(false);
  const [modal_02, setmodal_02] = useState(false);
  const [modal_03, setmodal_03] = useState(false);
  const [modal_04, setmodal_04] = useState(false);
  const [modal_05, setmodal_05] = useState(false);
  const [modal_06, setmodal_06] = useState(false);
  const [modal_07, setmodal_07] = useState(false);
  const [modal_08, setmodal_08] = useState(false);
  const [modal_09, setmodal_09] = useState(false);

  return (
    <React.Fragment>
      <div className="account-pages my-5 pt-sm-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={5}>
              <Card className="overflow-hidden">
                <div className="bg-primary-subtle">
                  <Row>
                    <Col className="col-7">
                      <div className="text-primary p-4">
                        <h5 className="text-primary">Member Login</h5>
                        {/* <p>Sign in to continue to Skote.</p> */}
                      </div>
                    </Col>
                    <Col className="col-5 align-self-end">
                      <img src={profile} alt="" className="img-fluid" />
                    </Col>
                  </Row>
                </div>
                <CardBody>
                  <div>
                    <Link to="/" className="logo-light-element">
                      <div className="avatar-md profile-user-wid mb-4">
                        <span className="avatar-title rounded-circle bg-light">
                          <img
                            src={logo}
                            alt=""
                            className="rounded-circle"
                            height="34"
                          />
                        </span>
                      </div>
                    </Link>
                  </div>
                  <div className="p-2">
                    <Form className="form-horizontal">
                      <div className="mb-4">
                        <Label className="form-label">아이디</Label>
                        <Input
                          name="email"
                          className="form-control"
                          placeholder="아이디 입력"
                          type="text"
                        />
                      </div>

                      <div className="mb-4">
                        <div className="d-flex justify-content-between">
                          <Label className="form-label">비밀번호</Label>
                          <Link to="/forgot-password" className="text-muted">
                            <i className="mdi mdi-lock me-1" />
                            비밀번호를 잊으셨나요?
                          </Link>
                        </div>
                        <Input
                          name="password"
                          type="password"
                          placeholder="비밀번호 입력"
                        />
                      </div>

                      <div className="mb-3 d-grid">
                        <button
                          className="btn btn-primary btn-block"
                          type="submit"
                          disabled
                        >
                          인증코드 발송
                        </button>
                        <FormFeedback type="invalid" className="d-block">
                          아이디 혹은 비밀번호를 다시 확인해주세요.
                        </FormFeedback>
                      </div>

                      <div className="mb-4">
                        <Label className="form-label">인증코드</Label>
                        <Row>
                          <Col className="col-10">
                            <Input
                              name="code"
                              className="form-control"
                              placeholder="인증코드를 입력하세요"
                              type="number"
                            />
                          </Col>
                          <Col>
                            <div className="d-flex align-items-center h-100 text-danger">
                              03:00
                            </div>
                          </Col>
                        </Row>
                      </div>

                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="customControlInline"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customControlInline"
                        >
                          아이디 저장
                        </label>
                      </div>

                      <div className="mt-3 d-grid">
                        <button
                          className="btn btn-primary btn-block"
                          type="submit"
                        >
                          로그인
                        </button>
                        <FormFeedback type="invalid" className="d-block">
                          인증코드를 다시 확인해주세요
                        </FormFeedback>
                      </div>
                    </Form>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="position-fixed bottom-0 end-0 p-2 d-flex flex-column gap-2">
        <Button
          color="secondary"
          className="btn-sm"
          onClick={() => {
            setmodal_01(!modal_01);
          }}
        >
          전송 성공
        </Button>
        <Button
          color="secondary"
          className="btn-sm"
          onClick={() => {
            setmodal_02(!modal_02);
          }}
        >
          로그인 불가
        </Button>
        <Button
          color="secondary"
          className="btn-sm"
          onClick={() => {
            setmodal_03(!modal_03);
          }}
        >
          비밀번호 재설정
        </Button>
        <Button
          color="secondary"
          className="btn-sm"
          onClick={() => {
            setmodal_04(!modal_04);
          }}
        >
          전송 성공
        </Button>
        <Button
          color="secondary"
          className="btn-sm"
          onClick={() => {
            setmodal_05(!modal_05);
          }}
        >
          입력 항목 오류
        </Button>
        <Button
          color="secondary"
          className="btn-sm"
          onClick={() => {
            setmodal_06(!modal_06);
          }}
        >
          입력 항목 오류
        </Button>
        <Button
          color="secondary"
          className="btn-sm"
          onClick={() => {
            setmodal_07(!modal_07);
          }}
        >
          비밀번호 변경
        </Button>
        <Button
          color="secondary"
          className="btn-sm"
          onClick={() => {
            setmodal_08(!modal_08);
          }}
        >
          내 정보 수정
        </Button>
        <Button
          color="secondary"
          className="btn-sm"
          onClick={() => {
            setmodal_09(!modal_09);
          }}
        >
          로그인 비밀번호 변경
        </Button>
      </div>
      <Modal
        size="sm"
        isOpen={modal_01}
        toggle={() => {
          setmodal_01(!modal_01);
        }}
        centered
      >
        <div className="modal-body">
          <div className="p-3 text-center">
            <i className="mdi mdi-thumb-up fs-3 text-primary" />
            <br />
            <strong className="fs-5">전송 성공</strong>
          </div>
          <p className="text-center">
            카카오톡으로 인증코드가
            <br />
            발송되었습니다.
            <br />
            (카카오톡이 없는 경우 SMS로 발송됩니다.)
          </p>
          <div className="mt-4">
            <button
              type="button"
              className="btn btn-primary w-100"
              onClick={() => {
                setmodal_01(false);
              }}
            >
              확인
            </button>
          </div>
        </div>
      </Modal>
      <Modal
        size="sm"
        isOpen={modal_02}
        toggle={() => {
          setmodal_02(!modal_02);
        }}
        centered
      >
        <div className="modal-body">
          <div className="p-3 text-center">
            <i className="mdi mdi-alert fs-2 text-warning" />
            <br />
            <strong className="fs-5">로그인 불가</strong>
          </div>
          <p className="text-center">
            비활성된 계정입니다.
            <br />
            관리자에게 문의하세요.
          </p>
          <div className="mt-4">
            <button
              type="button"
              className="btn btn-primary w-100"
              onClick={() => {
                setmodal_02(false);
              }}
            >
              확인
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
          <h5 className="modal-title mt-0">비밀번호 재설정</h5>
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
          <p className="mb-4">
            아이디를 입력하시면 등록된 휴대폰번호로 인증코드가 발송됩니다.
            <br />
            받으신 인증코드를 입력하여 인증 후<br />새 비밀번호로 재설정하세요.
          </p>
          <Form className="form-horizontal">
            <div className="mb-4">
              <Label className="form-label">아이디</Label>
              <div className="d-flex gap-2">
                <Input
                  name="email"
                  className="form-control"
                  placeholder="아이디 입력"
                  type="text"
                />
                <button
                  className="btn btn-primary btn-block text-nowrap"
                  type="submit"
                >
                  인증코드 발송
                </button>
              </div>
            </div>

            <div className="mb-4">
              <Label className="form-label">인증코드</Label>
              <Row>
                <Col className="col-10">
                  <Input
                    name="code"
                    className="form-control"
                    placeholder="인증코드를 입력하세요"
                    type="number"
                  />
                </Col>
                <Col>
                  <div className="d-flex align-items-center h-100 text-danger">
                    03:00
                  </div>
                </Col>
              </Row>
              <div className="mt-2 text-secondary">
                카카오톡으로 수신된 인증코드를 입력하세요.
                <br />
                카카오톡 앱이 없는 경우 SMS로 발송됩니다.
              </div>
            </div>
          </Form>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            onClick={() => {
              setmodal_03(!modal_03);
            }}
            className="btn btn-secondary w-xs"
            data-dismiss="modal"
          >
            취소
          </button>
          <button type="button" className="btn btn-primary w-xs">
            다음
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
            <i className="mdi mdi-thumb-up fs-3 text-primary" />
            <br />
            <strong className="fs-5">전송 성공</strong>
          </div>
          <p className="text-center">
            입력하신 아이디에 등록된 <br />
            휴대폰 번호(010-****-1234)로
            <br /> 인증코드가 전송되었습니다.
            <br /> 수신된 인증코드를 하단에 입력해주세요
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
        size="sm"
        isOpen={modal_05}
        toggle={() => {
          setmodal_05(!modal_05);
        }}
        centered
      >
        <div className="modal-body">
          <div className="p-3 text-center">
            <i className="mdi mdi-alert fs-2 text-warning" />
            <br />
            <strong className="fs-5">입력 항목 오류</strong>
          </div>
          <p className="text-center">아이디를 다시 확인해주세요.</p>
          <div className="mt-4">
            <button
              type="button"
              className="btn btn-primary w-100"
              onClick={() => {
                setmodal_05(false);
              }}
            >
              확인
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
            <strong className="fs-5">입력 항목 오류</strong>
          </div>
          <p className="text-center">인증코드를 다시 확인해주세요.</p>
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
          <h5 className="modal-title mt-0">비밀번호 변경</h5>
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
          <p className="mb-4">
            변경하실 비밀번호를 입력해주세요.
            <br />
            비밀번호는 8자리 이상으로 영문, 숫자 그리고 특수기호가 포함되어야
            합니다.
          </p>
          <Form className="form-horizontal">
            <div className="mb-4">
              <Label className="form-label">새 비밀번호</Label>
              <div className="d-flex flex-column gap-2">
                <Input
                  name="password"
                  type="password"
                  placeholder="비밀번호를 입력해주세요."
                />
                <Input
                  name="password"
                  type="password"
                  placeholder="비밀번호를 입력해주세요."
                />
              </div>

              <FormFeedback type="invalid" className="d-block">
                비밀번호가 일치하지 않습니다. 동일한 비밀번호를 입력해주세요.
              </FormFeedback>
            </div>
          </Form>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            onClick={() => {
              setmodal_07(!modal_07);
            }}
            className="btn btn-secondary w-xs"
            data-dismiss="modal"
          >
            취소
          </button>
          <button type="button" className="btn btn-primary w-xs">
            비밀번호 변경
          </button>
        </div>
      </Modal>
      <Modal
        isOpen={modal_08}
        toggle={() => {
          setmodal_08(!modal_08);
        }}
        centered
      >
        <div className="modal-header">
          <h5 className="modal-title mt-0">내 정보 수정</h5>
          <button
            type="button"
            onClick={() => {
              setmodal_08(!modal_08);
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
                이름 <span className="text-danger">*</span>
              </Label>
              <Input type="text" placeholder="이름을 입력해주세요." />
            </div>
            <div className="mb-4">
              <Label className="form-label">로그인 아이디</Label>
              <div className="py-1">admin</div>
            </div>
            <div className="mb-4">
              <Label className="form-label">
                휴대폰 번호 <span className="text-danger">*</span>
              </Label>
              <div className="d-flex gap-2">
                <Input
                  type="text"
                  placeholder="'-'를 빼고 숫자만 입력하세요."
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
              <div className="d-flex align-items-center justify-content-between mb-2">
                <Label className="form-label m-0">
                  로그인 비밀번호 <span className="text-danger">*</span>
                </Label>
                <Button
                  color="link"
                  className="btn btn-link p-0"
                  onClick={() => {
                    setmodal_09(!modal_09);
                  }}
                >
                  비밀번호 변경
                </Button>
              </div>
              <Input type="password" placeholder="패스워드를 입력해주세요." />
            </div>
          </Form>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            onClick={() => {
              setmodal_08(!modal_08);
            }}
            className="btn btn-secondary w-xs"
            data-dismiss="modal"
          >
            취소
          </button>
          <button type="button" className="btn btn-primary w-xs">
            정보 수정
          </button>
        </div>
      </Modal>
      <Modal
        isOpen={modal_09}
        toggle={() => {
          setmodal_09(!modal_09);
        }}
        centered
      >
        <div className="modal-header">
          <h5 className="modal-title mt-0">로그인 비밀번호 변경</h5>
          <button
            type="button"
            onClick={() => {
              setmodal_09(!modal_09);
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
              <Label className="form-label">현재 로그인 비밀번호</Label>
              <Input
                name="password"
                type="password"
                placeholder="패스워드를 입력해주세요."
              />
              <FormFeedback type="invalid" className="d-block">
                비밀번호를 다시 확인해주세요.
              </FormFeedback>
            </div>
            <div className="mb-4">
              <Label className="form-label">
                변경할 비밀번호를 입력해주세요. (숫자, 문자, 특수기호 포함 8자리
                이상)
              </Label>
              <Input
                name="password"
                type="password"
                placeholder="패스워드를 입력해주세요."
              />
            </div>
            <div className="mb-4">
              <Label className="form-label">
                확인을 위해 다시 입력해주세요.
              </Label>
              <Input
                name="password"
                type="password"
                placeholder="패스워드를 입력해주세요."
              />
              <FormFeedback type="invalid" className="d-block">
                비밀번호가 일치하지 않습니다. 동일한 비밀번호를 입력해주세요.
              </FormFeedback>
            </div>
          </Form>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            onClick={() => {
              setmodal_09(!modal_09);
            }}
            className="btn btn-secondary w-xs"
            data-dismiss="modal"
          >
            취소
          </button>
          <button type="button" className="btn btn-primary w-xs">
            비밀번호 변경
          </button>
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default withRouter(Login);

Login.propTypes = {
  history: PropTypes.object,
};
