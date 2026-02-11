"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-primary/10 to-background pt-16 pb-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col space-y-6"
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Nơi <span className="text-primary">Chất Lượng</span> Tạo Nên{" "}
              <span className="text-primary">Uy Tín</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Thiết bị điện số 1 chuyên cung cấp các thiết bị điện công nghiệp chính hãng, đáp ứng
              mọi nhu cầu từ dân dụng đến công trình và nhà xưởng. <br />
              Chúng tôi mang đến giải pháp điện an toàn – bền bỉ – hiệu quả, giúp bạn dễ dàng lựa
              chọn sản phẩm phù hợp cho từng dự án. <br />
              Tìm kiếm thiết bị chất lượng cho công trình của bạn hoặc để chúng tôi đồng hành cùng
              bạn trong mọi giải pháp điện.
            </p>
            <p className="text-left text-base md:text-xl">
              <span className="text-primary">Chất lượng tạo niềm tin – Giá tốt cho mọi dự án.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt2">
              <Button size="lg" asChild>
                <Link href="/gigs">Xem sản phẩm</Link>
              </Button>
            </div>
            <div className="pt-6">
              <p className="text-sm text-muted-foreground">
                Là lựa chọn tin cậy cho nhiều công trình và hệ thống điện trên toàn quốc.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1635335874521-7987db781153?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Freelancers collaborating"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              <div className="absolute bottom-1 left-0 right-0 p-6">
                <div className="bg-background/80 backdrop-blur-md rounded-lg p-4 shadow-lg">
                  <div className="flex items-center space-x-4">
                    <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-primary font-bold">4.9</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">Đánh giá từ khách hàng</h3>
                      <p className="text-sm text-muted-foreground">
                        Hàng trăm công trình tin dùng sản phẩm tại Thiết bị điện số 1.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 lg:-top-4 -right-4 bg-background rounded-lg shadow-lg p-4 max-w-[200px]">
              <div className="text-sm font-medium">Danh mục nổi bật</div>
              <ul className="mt-2 space-y-1 text-sm">
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                  PLC
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                  Biến tần
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-yellow-500 mr-2"></span>
                  HMI
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-yellow-500 mr-2"></span>
                  Servo
                </li>
              </ul>
            </div>

            <div className="absolute -bottom-8 -left-0 bg-background rounded-lg shadow-lg p-4">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                  +
                </div>
                <div>
                  <div className="text-sm font-medium">1K+ sản phẩm đa dạng</div>
                  <div className="text-xs text-muted-foreground">
                    Liên tục cập nhật các thiết bị.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
