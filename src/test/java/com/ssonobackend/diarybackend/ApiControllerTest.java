package com.ssonobackend.diarybackend;

import com.ssonobackend.diarybackend.domain.Journal;
import com.ssonobackend.diarybackend.domain.dto.PostsSaveRequestDto;
import com.ssonobackend.diarybackend.repository.PostRepository;
import org.junit.After;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

public class ApiControllerTest {
    @LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate restTemplate;

    @Autowired
    private PostRepository postsRepository;

    @After
    public void tearDown() throws Exception {
        postsRepository.deleteAll();
    }

    @Test

    public void Posts_등록된다() throws Exception {
        //given
        String content = "content";
        PostsSaveRequestDto requestDto = PostsSaveRequestDto.builder()
                .content(content)
                .build();

        String url = "http://localhost:" + port + "/api/v1/posts";

        //when
        ResponseEntity<Long> responseEntity = restTemplate.
                postForEntity(url, requestDto, Long.class);

        //then
        List<Journal> all = postsRepository.findAll();
        //assertThat(all.get(0).getContents()).isEqualTo(content);
    }
}
