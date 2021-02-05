package com.ssonobackend.diarybackend.controller;

import com.ssonobackend.diarybackend.domain.dto.PostsSaveRequestDto;
import com.ssonobackend.diarybackend.domain.dto.PostsUpdateRequestDto;
import com.ssonobackend.diarybackend.service.PostsService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController

public class PostsApiController {
    private final PostsService postsService;
    // 등록
    @PostMapping("/diary")
    public String save(@RequestBody PostsSaveRequestDto requestDto) {
        return postsService.save(requestDto);
    }
    // 수정
    @PutMapping("/diary/{date}")
    public String update(@PathVariable String date, @RequestBody PostsUpdateRequestDto requestDto) {
        return postsService.update(date, requestDto);
    }
    /* 조회
    @GetMapping("/api/v1/posts/{id}")
    public PostsResponseDto findById(@PathVariable Long id) {
        return postsService.findById(id);
    }
    */
}