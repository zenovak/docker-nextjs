FROM --platform=$BUILDPLATFORM python:3.11-alpine AS builder

WORKDIR /app

COPY requirements.txt ./

RUN pip install -r "requirements.txt"

COPY . . 

EXPOSE 4000

CMD ["flask", "run", "--host=0.0.0.0", "--port=4000"]
