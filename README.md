202112717 한상영

- 문서 작성(통신 규약) - README.md로 작성

- git에 aws 키 파일 추가 X
  파일 '.gitignore'는 node_modules, 공공데이터 포탈의 인증키와 RDS(Mysql) 연결 정보가 등록되어있습니다.

- git에 개발 과정 이력(커밋 로그) 존재

-개발과정

- 1일

* 개발환경설정
  node - modules ,aws - ec2, rds(mysql)
* 설계
  - 디렉터리 구조
    - src에 소스 코드 존재, 디렉터리는 src/) controller, entity, routes로 구성
  - rest Api

- 2일
  - 공공 데이터 포탈 api key 신청
    - covid 관련
      - 감염 현황, 시도별 현황
  - api로 제공되지 않는 데이터 입력
    - 대한민국의 거리두기 단계가 구분되는 지역(+거리두기 단계)
    - 거리두기 단계 별 준수 사항
    - 백신 종류 및 설명
  - api key로 접근이 가능한지 확인
    - postman으로 요청, 데이터 확인
- 3일
  - api로 받아온 정보를 data 부분만 추출 후 서버에서 제공
    - 감염 현황
    - 시도별 현황
  - Sequlize 사용
    - 거리두기 단계 수칙 정보와 지역 매핑
- 4일
  - CRUD
    - Area
    - Vaccine, StepByDistance
  - READMD.md
