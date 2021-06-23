# 202112717 한상영

## COVID APP URL : http://13.209.130.175:3000/areas

                 http://13.209.130.175:3000/insfection-status?pageNo=1&numOfRows=1&startCreateDt=20210621&endCreateDt=20210621

### 문서 작성(통신 규약) - README.md로 작성

- covid 관련 정보를 다루는 rest api 서버를 구현했습니다.
  공공 데이터 포탈 부분은 GET으로 자료를 가져오기만 할 수 있습니다.
  지역, 백신, 거리두기 단계 설명은 CRUD가 가능합니다.

  - 제공하는 정보
    - 공공데이터 포탈
      - 코로나 확진자
      - 누적 확진자
      - 검사 후 대기자
      - 완치자
      - 사망자
      - 지역별 코로나 현황
    - 지역 ( 거리두기 단계 구분 )
      - 이름
      - 거리두기 단계
    - 거리두기 단계 설명
      - 거리두기 단계
      - 수칙 명
      - 조건
      - 준수 사항 등

- rest api
  /src/routes/frontRoute.js 의 소스부분입니다.

* router.get("/insfection-status", insfectionStatusController);
  Parameter : pageNo : 몇 페이지의, numOfRows : 데이터 개수, startCreateDt : 시작 날짜, endCreateDt : 끝 날짜
  예) http://13.209.130.175:3000/insfection-status?pageNo=1&numOfRows=1&startCreateDt=20210621&endCreateDt=20210621
  : 6월 21일부터 6월 21일까지 1 페이지의 1개 정보 조회
  return : decideCnt:확진자, examCnt(검사진행 수), careCnt(격리 해제수), ...stateDt(기준일), stateTime(기준 시간), ...,

* router.get("/regional-status", regionalStatusController);
  Parameter : pageNo : 몇 페이지의, numOfRows : 데이터 개수, startCreateDt : 시작 날짜, endCreateDt : 끝 날짜
  예) http://13.209.130.175:3000/regional-status?pageNo=1&numOfRows=1&startCreateDt=20210621&endCreateDt=20210621
  : return : GUBUN(한국 시도명), DEATH_CNT (사망자 수), ...

* router.get("/areas", areaController.selectList);
  예) http://13.209.130.175:3000/areas : 지역 전체 조회
* router.get("/areas/:areaSqno", areaController.selectOne);
  예) http://13.209.130.175:3000/1 : 지역 시퀀스가 1인 지역의 이름과 거리두기 단계 조회
* router.post("/areas", areaController.createOne); : 지역 삽입
* router.put("/areas/:areaSqno", areaController.updateOne); : 지역 수정
* router.patch("/areas/:areaSqno", areaController.patchUse); : 지역 사용 여부 수정
* router.delete("/areas/:areaSqno", areaController.deleteOne); : 지역 삭제

* router.get("/sbds", stepByDistanceController.selectList); : 거리두기 단계 별 설명 모두 조회
* router.get("/sbds/:stepCode", stepByDistanceController.selectOne); : PK인 stepCode로 거리두기 단계 별 설명 조회
* router.post("/sbds", stepByDistanceController.createOne); : 거리두기 단계 별 설명 삽입
* router.put("/sbds/:stepCode", stepByDistanceController.updateOne); : 거리두기 단계 별 설명 수정
* router.patch("/sbds/:stepCode", stepByDistanceController.patchUse); : 거리두기 단계별 설명 사용 여부 수정
* router.delete("/sbds/:stepCode", stepByDistanceController.deleteOne); : 거리두기 단계별 설명 삭제 (해당 거리두기 단계에 지역이 있을 경우 삭제 불가)

* router.get("/vaccines", vaccineController.selectList); : 백신 설명 전체 조회
* router.get("/vaccines/:vaccineSqno", vaccineController.selectOne); : 백신 시퀀스의 정보 조회
* router.post("/vaccines", vaccineController.createOne); : 백신 설명 삽입
* router.put("/vaccines/:vaccineSqno", vaccineController.updateOne); 백신 설명 수정
* router.patch("/vaccines/:vaccineSqno", vaccineController.patchUse); 백신 설명 사용 여부 수정
* router.delete("/vaccines/:vaccineSqno", vaccineController.deleteOne); 백신 삭제

### git에 aws 키 파일 추가 X

: 파일 '.gitignore'는 node_modules, 공공데이터 포탈의 인증키와 RDS(Mysql) 연결 정보 포함

### git에 개발 과정 이력(커밋 로그) 존재

#### 개발과정

- 1일

  1. 개발환경설정
     node - modules ,aws - ec2, rds(mysql)
  2. 설계
     - 디렉터리 구조
       - src에 소스 코드 존재, 디렉터리는 src/) controller, entity, routes로 구성
     - rest Api

- 2일
  1. 공공 데이터 포탈 api key 신청
     - covid 관련
       - 감염 현황, 시도별 현황
  2. api로 제공되지 않는 데이터 입력
     - 대한민국의 거리두기 단계가 구분되는 지역(+거리두기 단계)
     - 거리두기 단계 별 준수 사항
     - 백신 종류 및 설명
  3. api key로 접근이 가능한지 확인
  - postman으로 요청, 데이터 확인
- 3일
  1. api로 받아온 정보를 data 부분만 추출 후 서버에서 제공
     - 감염 현황
     - 시도별 현황
  2. Sequlize 사용
     거리두기 단계 수칙 정보.hasMany(지역)
- 4일
  1. CRUD
     - Area
     - Vaccine, StepByDistance
     - READMD.md
